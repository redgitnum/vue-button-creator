import { createApp } from "vue";
import App from "./App.vue";

import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import Card from "primevue/card";
import Button from "primevue/button";
import Slider from "primevue/slider";
import SelectButton from "primevue/selectbutton";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Dropdown from "primevue/dropdown";
import InputNumber from "primevue/inputnumber";
import ColorPicker from "primevue/colorpicker";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Message from "primevue/message";
import ToggleButton from "primevue/togglebutton";

const app = createApp(App);

app.component("Card", Card);
app.component("Slider", Slider);
app.component("SelectButton", SelectButton);
app.component("Accordion", Accordion);
app.component("AccordionTab", AccordionTab);
app.component("Dropdown", Dropdown);
app.component("InputNumber", InputNumber);
app.component("ColorPicker", ColorPicker);
app.component("TabView", TabView);
app.component("TabPanel", TabPanel);
app.component("Message", Message);
app.component("ToggleButton", ToggleButton);
app.component("Button", Button);

app.mount("#app");
