import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer, Representative} from '../domain/customer';
import {CustomerService} from '../service/customerservice';
import {Product} from '../domain/product';
import {ProductService} from '../service/productservice';
import {Table} from 'primeng/table';
import {BreadcrumbService} from '../../breadcrumb.service';

@Component({
    templateUrl: './tabledemo.component.html',
    styleUrls: ['./tabledemo.scss']
})
export class TableDemoComponent implements OnInit {

    customers: Customer[];

    selectedCustomers1: Customer[];

    selectedCustomers2: Customer;

    representatives: Representative[];

    statuses: any[];

    loading = true;

    products: Product[];

    rowGroupMetadata: any;

    @ViewChild('dt') table: Table;

    constructor(private customerService: CustomerService, private productService: ProductService,
                private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Table'}
        ]);
    }

    ngOnInit() {
        this.customerService.getCustomersMedium().then(customers => {
            this.customers = customers;
            this.loading = false;
        });
        this.productService.getProductsWithOrdersSmall().then(data => this.products = data);

        this.representatives = [
            {name: 'Amy Elsner', image: 'amyelsner.png'},
            {name: 'Anna Fali', image: 'annafali.png'},
            {name: 'Asiya Javayant', image: 'asiyajavayant.png'},
            {name: 'Bernardo Dominic', image: 'bernardodominic.png'},
            {name: 'Elwin Sharvill', image: 'elwinsharvill.png'},
            {name: 'Ioni Bowcher', image: 'ionibowcher.png'},
            {name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png'},
            {name: 'Onyama Limba', image: 'onyamalimba.png'},
            {name: 'Stephen Shaw', image: 'stephenshaw.png'},
            {name: 'XuXue Feng', image: 'xuxuefeng.png'}
        ];

        this.statuses = [
            {label: 'Unqualified', value: 'unqualified'},
            {label: 'Qualified', value: 'qualified'},
            {label: 'New', value: 'new'},
            {label: 'Negotiation', value: 'negotiation'},
            {label: 'Renewal', value: 'renewal'},
            {label: 'Proposal', value: 'proposal'}
        ];
    }

    onSort() {
        this.updateRowGroupMetaData();
    }

    updateRowGroupMetaData() {
        this.rowGroupMetadata = {};

        if (this.customers) {
            for (let i = 0; i < this.customers.length; i++) {
                const rowData = this.customers[i];
                const representativeName = rowData.representative.name;

                if (i === 0) {
                    this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
                }
                else {
                    const previousRowData = this.customers[i - 1];
                    const previousRowGroup = previousRowData.representative.name;
                    if (representativeName === previousRowGroup) {
                        this.rowGroupMetadata[representativeName].size++;
                    }
                    else {
                        this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
                    }
                }
            }
        }
    }
}