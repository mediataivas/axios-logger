import { ErrorLogConfig, GlobalLogConfig, RequestLogConfig, ResponseLogConfig } from './types';
export declare let globalConfig: GlobalLogConfig;
declare function getGlobalConfig(): GlobalLogConfig;
declare function setGlobalConfig(config: GlobalLogConfig): void;
declare function assembleBuildConfig(config?: RequestLogConfig | ResponseLogConfig | ErrorLogConfig): any;
export { getGlobalConfig, setGlobalConfig, assembleBuildConfig, };
