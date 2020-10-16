import { Injectable } from '@angular/core';

export interface BadgeItem {
    type: string;
    value: string;
}
export interface Saperator {
    name: string;
    type?: string;
}
export interface SubChildren {
    state: string;
    name: string;
    type?: string;badge?: BadgeItem[];
    
}
export interface ChildrenItems {
    state: string;
    name: string;
    type?: string; badge?: BadgeItem[];
    child?: SubChildren[];
}

export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
    badge?: BadgeItem[];
    saperator?: Saperator[];
    children?: ChildrenItems[];
}

const MENUITEMS = [

    {
        state: 'home',
        name: 'الرئيسية',
        type: 'link',
        icon: 'home'
    },




    {
        state: '',
        name: 'إدارة خدمات الترافع الالكتروني',
        type: 'saperator',
        icon: 'description'
    },
    {
        state: '',
        name: 'المذكرات',
        type: 'sub',
        icon: 'description',
        children: [
            { state: '', name: 'المذكرات 1', type: 'link' },
            { state: '', name: 'المذكرات 2', type: 'link' }
        ]
    },
    {
        state: '',
        name: '   لجان المذكرات',
        type: 'sub',
        icon: 'border_color',

        children: [
            { state: '', name: '   لجان المذكرات 1', type: 'link' },
            { state: '', name: '   لجان المذكرات 2', type: 'link' },

        ]
    },
    {
        state: '',
        name: 'القضايا',
        type: 'sub',
        icon: 'account_balance',

        children: [
            { state: '', name: 'جدول القضايا الواردة', type: 'link', badge: [{ type: 'inverse', value: '5' }], },
            { state: '', name: 'طلباتى', type: 'link' },
            { state: '', name: 'الجلسات', type: 'link' },

        ]
    },
    {
        state: '',
        name: 'إدارة النظام',
        type: 'saperator',
        icon: 'description'
    },
    {
        state: '',
        name: 'البيانات الاساسية',
        type: 'sub',
        icon: 'info_outline',
        children: [
            { state: '', name: 'البيانات الاساسية 1', type: 'link' },
            { state: '', name: 'البيانات الاساسية 2', type: 'link' }
        ]
    },
    {
        state: '',
        name: 'المستخدمين',
        type: 'sub',
        icon: 'perm_contact_calendar',
        children: [
            { state: '', name: 'المستخدمين 1', type: 'link' },
            { state: '', name: 'المستخدمين 2', type: 'link' }
        ]
    },



    {
        state: '',
        name: ' اعدادات سير العمل',
        type: 'sub',
        icon: 'brightness_high',
        children: [
            { state: '', name: ' اعدادات سير العمل 1', type: 'link' },
            { state: '', name: ' اعدادات سير العمل 2', type: 'link' }
        ]
    },
];

@Injectable()
export class MenuCustomItems {
    getMenuitem(): Menu[] {
        return MENUITEMS;
    }
}
