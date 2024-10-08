import {isIOS} from '../services/utils/platformUtil';

export const fontFamilies = {
  ARCHIVO: {
    normal: isIOS() ? 'Archivo-Regular' : 'ArchivoRegular', //weight: 400
    medium: isIOS() ? 'Archivo-Medium' : 'ArchivoMedium', //weight: 500
    semiBold: isIOS() ? 'Archivo-Bold' : 'ArchivoBold', //weight: 600
    bold: isIOS() ? 'Archivo-Extra-Bold' : 'ArchivoExtraBold', //weight: 800
  },
  CAIRO: {
    normal: isIOS() ? 'Cairo-Regular' : 'CairoRegular',
    medium: isIOS() ? 'Cairo-Medium' : 'CairoMedium',
    semibold: isIOS() ? 'Cairo-Bold' : 'CairoBold',
  },
};
