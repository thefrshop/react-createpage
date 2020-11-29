import React from 'react';

import { CreatePage, getStructFromFormat, getIDList, getIFList } from 'tfsm-formset/dist';
import 'tfsm-formset/dist/index.css';
import './App.css';

export default class test2 extends React.Component {
	onSubmit = (data) => {
		console.log(data);
	};

	render() {
		return (
			<CreatePage
				ModifyMode
				InitData={InitData}
				DataStruct={ProductDataStruct}
				onSubmit={this.onSubmit}
				hierarchyData={{
					Category: catdataSample,
					Supply: catdataSample
				}}
				ListData={ListData}
			>
				<div key="Child1">Child1</div>
				<div key="Child2">Child2</div>
			</CreatePage>
		);
	}
}
const InitData = {
	ProductNum: 'C1606399705',
	ProductName: '상품명',
	Price: '1500',
	SupplyPrice: '2000',
	Tex: '비과세',
	Category: [
		{ Code: '1', Name: '1', lev: 0, pid: 0, key: 'sKItoqKJnAbTnGVP3mfM' },
		{ Code: '2', pid: 'sKItoqKJnAbTnGVP3mfM', lev: 1, Name: '2', key: 'bvA6fuaFER7IQvpoCOSt' },
		{ pid: 'bvA6fuaFER7IQvpoCOSt', Name: '33', lev: 2, Code: '33', key: '0HANo5pGWvHBLuonzePR' }
	],
	Supply: { Code: 'sss', Name: 'ss' }
};

const ListData = [ { Code: 'sss', Name: 'ss' } ];
const CatSet_name = [ '대분류', '중분류', '소분류' ];
const CatSet_orderField = 'Name';
const Listcolumns = [
	{
		dataField: 'Code',
		text: '분류 코드'
	},
	{
		dataField: 'Name',
		text: '분류 이름'
	}
];

const ProductDataStruct = {
	DataType: 'Product',
	FSref: 'Product',
	Struct: [
		{
			id: 'BasicInfo',
			name: '기본 정보',
			format: 'Titletext',
			Items: [
				{
					id: 'ProductNum',
					name: '상품번호',
					format: 'CodeGen',
					prefix: 'C'
				},
				{
					id: 'ProductName',
					name: '상품명',
					format: 'Text'
				},
				{
					id: 'Category',
					name: '상품분류',
					format: 'Hierarchy',
					HierarchyData: {
						name: CatSet_name,
						viewField: CatSet_orderField
					}
				},
				{
					id: 'Supply',
					name: '생산자',
					format: 'ListSelect',
					dataprops: 'ListData',
					columns: Listcolumns,
					keyField: 'Code',
					viewField: 'Name'
				},
				{
					id: 'ChildTest',
					key: 'Child1',
					format: 'Child'
				}
			]
		},
		{
			id: 'SalesInfo',
			name: '판매 정보',
			format: 'Titletext',
			Items: [
				{
					id: 'Price',
					name: '상품가격',
					format: 'Price'
				},
				{
					id: 'Tex',
					name: '과세/비과세',
					format: 'Select',
					SelectText: [ '과세', '비과세' ]
				},
				{
					id: 'SupplyPrice',
					name: '공급단가',
					format: 'Price'
				},
				{
					id: 'ChildTest',
					key: 'Child2',
					format: 'Child'
				}
			]
		},
		{
			id: 'SalesInfo',
			name: '표시 정보',
			format: 'Titletext',
			Items: [
				{
					id: 'TitleImage',
					name: '대표 이미지',
					format: 'UploadImage'
				},
				{
					id: 'ImageGallery',
					name: '이미지 갤러리',
					format: 'UploadImage'
				},
				{
					id: 'DetailPage',
					name: '상세페이지',
					format: 'Tab',
					Items: [
						{
							id: 'DetailImage',
							name: '이미지',
							format: 'UploadImage'
						},
						{
							id: 'DetailHtml',
							name: 'HTML',
							format: 'UploadHtml'
						}
					]
				},

				{
					id: 'ProductInfo',
					name: '상품정보고시',
					format: 'Textline'
				}
			]
		}
	]
};

const catdataSample = [
	[
		{ Code: '1', Name: '1', lev: 0, pid: 0, key: 'sKItoqKJnAbTnGVP3mfM' },

		{ Code: '11', pid: 0, lev: 0, Name: '11', key: 'mlX5LMJgMf7FVqBRODBq' },

		{ Name: '111', pid: 0, Code: '111', lev: 0, key: 'RSeghKOWqnOojJxljSFu' }
	],
	[
		{ Code: '2', pid: 'sKItoqKJnAbTnGVP3mfM', lev: 1, Name: '2', key: 'bvA6fuaFER7IQvpoCOSt' },

		{ Code: '22', lev: 1, Name: '22', pid: 'sKItoqKJnAbTnGVP3mfM', key: '6tAxuc4g2GwcA8AuJV1d' }
	],
	[ { pid: 'bvA6fuaFER7IQvpoCOSt', Name: '33', lev: 2, Code: '33', key: '0HANo5pGWvHBLuonzePR' } ]
];