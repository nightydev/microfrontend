
    export type RemoteKeys = 'shopcart/App' | 'shopcart/MiniCart';
    type PackageType<T> = T extends 'shopcart/MiniCart' ? typeof import('shopcart/MiniCart') :T extends 'shopcart/App' ? typeof import('shopcart/App') :any;