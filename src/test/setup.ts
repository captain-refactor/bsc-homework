import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jsdom-global/register";
import "jest-enzyme";
import "mobx-react/batchingForReactDom";
Enzyme.configure({ adapter: new Adapter() });
