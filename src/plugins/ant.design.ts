import { App } from '@vue/runtime-core';
import {
  Typography,
  Button,
  DatePicker,
  Checkbox,
  Pagination,
  Table,
  Layout,
  Collapse,
  Modal,
  Select,
  Form,
  Input,
  InputNumber,
  ConfigProvider,
  Breadcrumb,
  Popover,
  Menu,
  Radio,
  Tag,
  Tabs,
  Tooltip,
  Spin,
  Dropdown,
  Upload,
  Space,
  AutoComplete,
  Col,
  Row,
} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const registerAntdesign = (app: App<Element>) => {
  app
    .use(Typography)
    .use(Button)
    .use(DatePicker)
    .use(Checkbox)
    .use(Pagination)
    .use(Table)
    .use(Layout)
    .use(Collapse)
    .use(Modal)
    .use(Form)
    .use(Input)
    .use(InputNumber)
    .use(ConfigProvider)
    .use(Breadcrumb)
    .use(Popover)
    .use(Menu)
    .use(Radio)
    .use(Select)
    .use(Tag)
    .use(Tabs)
    .use(Tooltip)
    .use(Spin)
    .use(Dropdown)
    .use(Upload)
    .use(Space)
    .use(AutoComplete)
    .use(Row)
    .use(Col);
};

export default registerAntdesign;
