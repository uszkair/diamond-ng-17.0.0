import {Component} from '@angular/core';
import {BreadcrumbService} from 'src/app/service/app.breadcrumb.service';
import {AppLayoutComponent} from 'src/app/app.layout.component';

@Component({
    templateUrl: './app.invoice.component.html',
    styles: [`
        :host ::ng-deep .p-datatable-lg table { 
            border-collapse: separate !important;
            border-spacing: 0 1rem !important;
            
            td, th {
                border: none;
            }
        }

        :host ::ng-deep .p-datatable.p-datatable-lg .p-datatable-footer {
            margin-top: 3rem;
            margin-bottom: 1rem;
            padding: 0 !important;
            border: none !important;
        }

        :host ::ng-deep .p-datatable table > thead > tr {
            background-color: black !important;
        }
    `]
})
export class AppInvoiceComponent {

    constructor(private breadcrumbService: BreadcrumbService, public appMain: AppLayoutComponent) {
        this.breadcrumbService.setItems([
            {label: 'Invoice'}
        ]);
    }

    print() {
        window.print();
    }

    tableData = [
        {name: 'Creative Design', date: '29 Jul 2021', hours: '80h', rate: '$40.00', amount: '$920.34'},
        {name: 'Logo Design', date: '29 Jul 2021', hours: '10h', rate: '$20.00', amount: '$834.12'},
        {name: 'Web Development', date: '29 Jul 2021', hours: '7h', rate: '$60.00', amount: '$340.20'},
        {name: 'Logo Design', date: '29 Jul 2021', hours: '72h', rate: '$20.00', amount: '$834.12'}
    ]
}
