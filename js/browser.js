/* jshint esversion: 6 */
/* jshint node: true */

'use strict';

var ipc = require('electron').ipcRenderer;
var NativeNotification = Notification;

Notification = (title, options) => {
  var notification = new NativeNotification(title, options);

  notification.addEventListener('click', () => {
    ipc.send('notification-click');
  });

  return notification;
};

Notification.prototype = NativeNotification.prototype;
Notification.permission = NativeNotification.permission;
Notification.requestPermission = NativeNotification.requestPermission.bind(Notification);
