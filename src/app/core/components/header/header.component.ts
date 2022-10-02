import { Component, OnInit } from '@angular/core'
import { ETheme } from './enums/ETheme.enum'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public icon: string = ETheme.ICON_SUN
  public otherTheme: string = ETheme.TEXT_LIGHT
  constructor() {}

  ngOnInit(): void {}

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme')
    if (theme) {
      this.otherTheme = ETheme.TEXT_LIGHT
      return (this.icon = ETheme.ICON_SUN)
    }

    this.otherTheme = ETheme.TEXT_DARK
    return (this.icon = ETheme.ICON_MOON)
  }
}
