
import * as Device from 'expo-device';

export const deviceInfo = [
    {
      id: '1',
      title: 'Device Name',
      data: Device.deviceName,
    },
    {
      id: '2',
      title: 'Device Manufacturer',
      data: Device.manufacturer,
    },
    {
      id: '3',
      title: 'Device Model Name',
      data: Device.modelName,
    },
    {
      id: '4',
      title: 'Device OS Version',
      data: Device.osVersion,
    },
    {
      id: '5',
      title: 'Device OS Internal Build Id',
      data: Device.osInternalBuildId,
    },
    {
      id: '6',
      title: 'Device Platform API Level',
      data: Device.platformApiLevel,
    },
  ];