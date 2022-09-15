/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export {};

interface GtmDataProps {
  start: string;
  uniqueEventId: string;
}
interface GetGtm {
  get: (gtm: string) => GtmDataProps;
}
interface GtmDataLayer {
  dataLayer: GetGtm;
}
interface GoogleTagManager {
  'GTM-57QS65R': GtmDataLayer;
}

declare global {
  interface Window {
    google_tag_manager?: GoogleTagManager;
    dataLayer?: Array<object>;
  }
}
