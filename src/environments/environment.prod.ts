import _ from "lodash";
import { commonEnvironment } from "./environment.common";

const productionEnvironment: Partial<typeof commonEnvironment> = {
	production: true
}

export const environment = _.merge(commonEnvironment, productionEnvironment);
