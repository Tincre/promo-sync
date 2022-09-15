/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export function generateEventIdClientSide(): string | undefined {
  if (typeof window !== 'undefined') {
    const gtmContainerId = 'GTM-57QS65R';
    if (typeof window?.google_tag_manager !== 'undefined') {
      var gtmData =
        window.google_tag_manager[gtmContainerId].dataLayer.get('gtm');
      return gtmData.start + '.' + gtmData.uniqueEventId;
    } else {
      return window.crypto.randomUUID().replaceAll('-', '');
    }
  }
}
