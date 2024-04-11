export type Routes = {
  endpoint: string;
  auth: boolean;
  proxy: {
    target: 'signifier' | 'userifier';
    endpoint: string;
  };
};
