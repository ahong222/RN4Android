# 在已有的项目中集成RN
集成步骤参考[README.pdf](file:///./README.pdf)

注意PackageList中需要包含MainReactPackage

# 运行步骤
方案1:
删除asset目录中的index.android.bundle
根目录执行yarn start 之后运行app，连接adb后，输入:adb reverse tcp:8081 tcp:8081

方案2:
将js打包成bundle后，直接运行app
打包成bundle命令:
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

