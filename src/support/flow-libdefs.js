declare var __DEV__: boolean;

declare module 'relay-runtime' {
  // Until these packages properly export Flow types, this is the minimal set-up
  // required to stop the exported types in the __generated__ artifacts from
  // being invisible to Flow. See:
  // - https://github.com/facebook/relay/issues/1689
  // - https://github.com/facebook/relay/issues/1758
  declare type ConcreteFragment = any;
  declare type ConcreteRequest = any;
  declare type FragmentReference = any;

  declare var Environment: any;
  declare var Network: any;
  declare var RecordSource: any;
  declare var Store: any;
  declare var fetchQuery: any;
}
