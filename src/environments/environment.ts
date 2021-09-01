import _ from "lodash";
import { commonEnvironment } from "./environment.common";

const localEnvironment: Partial<typeof commonEnvironment> = {

}

export const environment = _.merge(commonEnvironment, localEnvironment);
