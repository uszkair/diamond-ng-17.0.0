import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [RouterModule.forChild([
    {path: 'calendar', loadChildren: () => import('./calendar/app.calendar.module').then(m => m.AppCalendarModule)},
    {path: 'crud', loadChildren: () => import('./crud/app.crud.module').then(m => m.AppCrudModule)},
    {path: 'help', loadChildren: () => import('./help/app.help.module').then(m => m.AppHelpModule)},
    {path: 'invoice', loadChildren: () => import('./invoice/app.invoice.module').then(m => m.AppInvoiceModule)},
    {path: 'timeline', loadChildren: () => import('./timeline/app.timelinedemo.module').then(m => m.AppTimelineDemoModule)},
    {path: 'faq', loadChildren: () => import('./faq/app.faq.module').then(m => m.AppFaqModule)},
  ])],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
