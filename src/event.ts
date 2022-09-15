/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { generateEventIdClientSide } from './eventId';
import { ALLOWED_PROMO_EVENTS } from './constants';

/*
 * @description Book an event for Tincre's Google Tag Manager
 * @param eventName the string event name starting with 'PromoEvent'
 * @param eventData an object with data for Google Tag Manager consumption
 * @returns void
 */
export function gtmEvent(eventName: string, eventData: object) {
  if (ALLOWED_PROMO_EVENTS.includes(eventName)) {
    const eventId = generateEventIdClientSide();
    window.dataLayer?.push({
      event: eventName,
      'x-fb-event_id': eventId,
      transactionId: eventId,
      ...eventData,
    });
  }
}
