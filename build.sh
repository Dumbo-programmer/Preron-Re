npx capacitor-assets generate --android
npx capacitor-assets generate --copy
ionic sync
ionic cap build android
cd android && ./gradlew assembleDebug && cd ..
zipalign -v -p 4 debug-app.apk preron-deubg-aligned.apk
git add .
