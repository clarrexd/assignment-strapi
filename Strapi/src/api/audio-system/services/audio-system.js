'use strict';

/**
 * audio-system service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::audio-system.audio-system');
