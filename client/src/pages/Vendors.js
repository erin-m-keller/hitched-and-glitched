import React from 'react';
import { Layout, Menu, InputNumber } from 'antd';

const { Sider, Content } = Layout;

let typeMenu = {
	key: `1`,
	label: `Type`,
	children: [
		{
			key: `1`,
			label: `All`,
		},
		{
			key: `2`,
			label: `Food`,
		},
		{
			key: `3`,
			label: `Floral`,
		}
	]
};
let sortMenu = {
	key: `2`,
	label: `Sort by`,
	children: [
		{
			key: `1`,
			label: `Relevance`,
		},
		{
			key: `2`,
			label: `Price (high)`,
		},
		{
			key: `3`,
			label: `Price (low)`,
		},
		{
			key: `4`,
			label: `Reviews (high)`,
		},
		{
			key: `5`,
			label: `Reviews (low)`,
		}
	]
};

const onChange = (value) => {
	console.log('changed', value);
};

const Vendors = () => {
	return (
		<>
			<Layout className="main-content">
				<h1>Vendors</h1>
				<Sider className="sidebar">
					<Menu mode="inline" defaultSelectedKeys={['1']} items={[typeMenu, sortMenu]} />
					<InputNumber min={0} addonBefore="Min:" addonAfter="$" onChange={onChange} />
					<InputNumber min={0} addonBefore="Max:" addonAfter="$" onChange={onChange} />
				</Sider>
				<Content className="content">
					<h2>Vendor List</h2>
				</Content>
			</Layout>
		</>
	);
};

export default Vendors;