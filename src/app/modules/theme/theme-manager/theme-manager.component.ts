import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CltThemeService } from '../providers/theme.service';
import { CltCommonService } from '../../core/providers/common.service';
import mockdataTable from './datatable_data.json';

@Component({
  selector: 'clt-theme-manager',
  templateUrl: './theme-manager.component.html',
  styleUrls: ['./theme-manager.component.scss']
})
export class CltThemeManagerComponent implements OnInit {
  mockData = mockdataTable;
  variables = [];
  currentTheme = '';
  @ViewChild('exportButton') exportButton: ElementRef;
  @ViewChild('exportInput') exportInput: ElementRef;
  constructor(public themeService: CltThemeService, private common: CltCommonService) { }

  ngOnInit() {
    this.variables = Object.keys(this.themeService.theme);
  }

  changeTheme(theme) {
    const selectedTheme = this.themeService.themes.filter(_theme => _theme.name === theme)[0];
    this.currentTheme = selectedTheme.name;
    this.themeService.reload(selectedTheme.theme);
  }

  difference() {
    const differences = this.common.differences(this.themeService.theme, this.themeService.themes[0].theme).different;
    if (differences.length) {
      const json = {};
      differences.forEach(difference => {
        json[difference] = this.themeService.theme[difference];
      });
      return json;
    }
    return {};
  }

  changeStyle(variable, style) {
    this.themeService.setStyle(variable, style);
  }
  export() {
    console.log('hey');
    const link = this.exportButton.nativeElement;
    link.download = this.exportInput.nativeElement.value + '.json' || 'theme.json';
    const data = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.difference()));
    link.href = 'data:' + data;
  }

  getTheme() {
    return encodeURIComponent(JSON.stringify(this.themeService.theme));
  }
}
