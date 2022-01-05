package com.marvel;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RNNativeCountHeroesModule extends ReactContextBaseJavaModule {
    RNNativeCountHeroesModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "RNNativeCountHeroesModule";
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String countHeroes(int total) {
        System.out.println(total);
        return "Total de "+ total +" super-heróis";
    }
}