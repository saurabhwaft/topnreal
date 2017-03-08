'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('topnrealApp.util', [])
  .factory('Util', UtilService)
  .name;
