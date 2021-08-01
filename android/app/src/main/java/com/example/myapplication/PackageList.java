package com.example.myapplication;

import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import android.content.Context;

import java.util.ArrayList;
import java.util.List;

/**
 * @author shenyanghong
 * @since 8/1/21.
 */

public class PackageList {
    List<ReactPackage> list =new ArrayList<>();
    public PackageList(Context context) {
        list.add(new MainReactPackage());
    }
    public List<ReactPackage> getPackages() {
        return list;
    }
}
