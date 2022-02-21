import { App } from '@vue/runtime-core';
import {
  Button,
  DatePicker,
  Checkbox,
  Pagination,
  Table,
  Layout,
  Select,
  Form,
  Input,
  InputNumber,
  ConfigProvider,
  Breadcrumb,
  Popover,
  Menu,
  Radio,
  Spin,
  Dropdown,
  AutoComplete,
} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const useAntdesignComponent = (app: App<Element>) => {
  app
    .use(Button)
    .use(DatePicker)
    .use(Checkbox)
    .use(Pagination)
    .use(Table)
    .use(Layout)
    .use(Form)
    .use(Input)
    .use(InputNumber)
    .use(ConfigProvider)
    .use(Breadcrumb)
    .use(Popover)
    .use(Menu)
    .use(Radio)
    .use(Select)
    .use(Spin)
    .use(Dropdown)
    .use(AutoComplete);
};

export default useAntdesignComponent;
