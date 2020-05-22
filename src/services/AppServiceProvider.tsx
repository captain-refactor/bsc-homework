import React, { createContext, PropsWithChildren, useContext } from "react";
import { AppService, createAppService } from "./app-service";

export const AppServiceContext = createContext<AppService>(null as any);

export class AppServiceProvider extends React.Component<Props> {
  state = {
    appService: createAppService(),
  };

  render() {
    return (
      <AppServiceContext.Provider
        value={this.props.appService || this.state.appService}
      >
        {this.props.children}
      </AppServiceContext.Provider>
    );
  }
}

type Props = PropsWithChildren<{
  appService?: AppService;
}>;

export const useAppService = () => useContext(AppServiceContext);
