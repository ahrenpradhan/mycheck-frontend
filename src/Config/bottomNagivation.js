export const config = {
  Home: {
    title: 'Home',
    focusedImage: 'ios-information-circle',
    defaultImage: 'ios-information-circle-outline',
  },
  Invoices: {
    title: 'Invoices',
    focusedImage: 'file-tray-full',
    defaultImage: 'file-tray-full-outline',
  },
  Settings: {
    title: 'Settings',
    focusedImage: 'md-settings-sharp',
    defaultImage: 'md-settings-outline',
  },
}

export const getImage = (type, focused) => {
  return config[type || 'default'][focused ? 'focusedImage' : 'defaultImage']
}
