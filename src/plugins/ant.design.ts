import { App } from '@vue/runtime-core';
import {
  Typography,
  Button,
  Input,
  DatePicker,
  Checkbox,
  Pagination,
  Table,
  Tabs,
  Layout,
  Collapse,
  Modal,
  Select,
  Form,
  ConfigProvider,
  Breadcrumb,
  Popover,
  Menu,
  Radio,
  Tooltip,
  Spin,
  Col,
  Row,
} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const registerAntdesign = (app: App<Element>) => {
  app
    .use(Typography)
    .use(Button)
    .use(Input)
    .use(DatePicker)
    .use(Checkbox)
    .use(Pagination)
    .use(Table)
    .use(Tabs)
    .use(Layout)
    .use(Collapse)
    .use(Modal)
    .use(Form)
    .use(ConfigProvider)
    .use(Breadcrumb)
    .use(Popover)
    .use(Menu)
    .use(Radio)
    .use(Select)
    .use(Tooltip)
    .use(Spin)
    .use(Row)
    .use(Col);
};

export default registerAntdesign;
