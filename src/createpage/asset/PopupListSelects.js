import React from 'react';

import { Button, Modal, Spinner, Carousel } from 'react-bootstrap';
import './PopupCatSelect.css';
import update from 'react-addons-update';

import BootstrapTable from 'react-bootstrap-table-next';
import CreateTable from '../../createtable/CreateTable';
class PopupListSelect extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isloading: false,
			done: false,
			SelectedList: []
		};
	}

	componentDidMount() {}

	ListData = () => {
		var ListData = this.props[this.props.dataprops];
		if (ListData === undefined) {
			ListData = [];
		}

		//console.log('ListData', ListData);

		return ListData;
	};

	onSelect = (row) => {
		this.setState({
			Selected: row,
			done: true
		});
	};

	onSelectmulti = (row, isSelect, rowIndex, e) => {
		//console.log(row, isSelect, rowIndex, e);
		var SelectedList = this.state.SelectedList;
		if (isSelect) {
			SelectedList.push({ rowIndex: rowIndex, data: row });
			this.setState({
				SelectedList: SelectedList,
				done: true
			});
		} else {
			let filteredArray = SelectedList.filter((m) => m.rowIndex !== rowIndex);
			this.setState({
				SelectedList: filteredArray,
				done: true
			});
		}
	};

	MoveCarousel = (selectedIndex) => {
		this.setState({
			index: selectedIndex
		});
	};

	selectRowProp = () => {
		if (this.props.multselect === true) {
			return {
				mode: 'checkbox',
				hideSelectColumn: true,
				clickToSelect: true,
				onSelect: this.onSelectmulti,
				bgColor: '#ffffe0'
			};
		} else {
			return {
				mode: 'radio',
				hideSelectColumn: true,
				clickToSelect: true,
				onSelect: this.onSelect,
				bgColor: '#ffffe0'
			};
		}
	};

	onHide = () => {
		this.setState({
			index: 0
		});
		this.props.onHide();
	};

	render() {
		const rowEvents = {
			onDoubleClick: (e, row, rowIndex) => {
				if (this.props.multselect !== true) {
					this.props.onOk(this.state.Selected);
				}
			}
		};

		return (
			<div className="PopupCatSelect">
				<Modal className="PopupCatSelectModal" centered show={this.props.ispopup} onHide={this.onHide}>
					<Modal.Header closeButton>
						<div className="PopHeader">
							<div className="Title">{this.props.title}</div>
						</div>
					</Modal.Header>
					<Modal.Body className="PopBody">
						<div className="TableView">
							<CreateTable {...this.props} data={this.ListData()} selectRow={this.selectRowProp()} rowEvents={rowEvents} />
						</div>
					</Modal.Body>
					<Modal.Footer className="PopFooter">
						<div className="DoneView">
							{!this.state.done ? null : (
								<Button
									variant="Submit"
									className="FooterButton"
									onClick={() => {
										if (this.props.multselect === true) {
											this.props.onOk(this.state.SelectedList);
										} else {
											this.props.onOk(this.state.Selected);
										}
									}}
								>
									추가
								</Button>
							)}
						</div>

						{!this.state.isloading ? null : <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />}
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default PopupListSelect;
