import React from 'react';
import { useObserver, MobXProviderContext } from "mobx-react";
import { Instance } from 'mobx-state-tree';
import { Store } from './stores';

const useStores = (): { store: Instance<typeof Store> } => {
    return React.useContext(MobXProviderContext);
}

export const useUserData = () => {
    const { store } = useStores()
    return useObserver(() => ({
        foo: store.foo,
        bar: store.bar,
        updateFoo: store.updateFoo,
        updateBar: store.updateBar
    }));
}