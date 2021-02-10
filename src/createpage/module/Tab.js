import React from 'react';
import { Form } from 'react-bootstrap';
import { InitItemsSet } from '../asset/InitItemsSet';

//초기화
export const InitData = (item) => {
	var TabData = InitItemsSet(item.Items);
	//Object.assign(InitData, TabData);
	return TabData;
};

//뷰
export const ItemsView = (M, index, item, values, handleChange, ModifyMode) => {
	return (
		<div className="ItemViewRow" key={index}>
			<div className="ItemHeader">
				<div className="ItemTitle">{item.name}</div>
				<div className="ItemContent" />
			</div>
			<div className="ItemBody">
				<Tabs defaultActiveKey={item.Items[0].id} id="noanim-tab-example">
					{TabTable}
				</Tabs>
			</div>
		</div>
	);
};