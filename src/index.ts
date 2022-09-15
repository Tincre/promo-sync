/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { gtmEvent } from './event';

export function gtmPageView(remainingData: object) {
  gtmEvent('PromoEventPageView', remainingData);
}

export function promoEventPageView(remainingData: object) {
  gtmPageView(remainingData);
}

export function promoEventPromoButtonClick(remainingData: object) {
  gtmEvent('PromoEventPromoButtonClick', remainingData);
}

export function promoEventButtonClick(remainingData: object) {
  gtmEvent('PromoEventLoginButtonClick', remainingData);
}

export function promoEventSignupButtonClick(remainingData: object) {
  gtmEvent('PromoEventSignupButtonClick', remainingData);
}

export function promoEventAddPaymentInfo(remainingData: object) {
  gtmEvent('PromoEventAddPaymentInfo', remainingData);
}

export function promoEventDonate(remainingData: object) {
  gtmEvent('PromoEventDonate', remainingData);
}

export function promoEventAddToCart(remainingData: object) {
  gtmEvent('PromoEventAddToCart', remainingData);
}

export function promoEventCompleteRegistration(remainingData: object) {
  gtmEvent('PromoEventCompleteRegistration', remainingData);
}

export function promoEventInitiateCheckout(remainingData: object) {
  gtmEvent('PromoEventInitiateCheckout', remainingData);
}

export function promoEventLead(remainingData: object) {
  gtmEvent('PromoEventLead', remainingData);
}

export function promoEventPurchase(remainingData: object) {
  gtmEvent('PromoEventPurchase', remainingData);
}

export function promoEventSearch(remainingData: object) {
  gtmEvent('PromoEventSearch', remainingData);
}

export function promoEventStartTrial(remainingData: object) {
  gtmEvent('PromoEventStartTrial', remainingData);
}

export function promoEventSubmitApplication(remainingData: object) {
  gtmEvent('PromoEventSubmitApplication', remainingData);
}

export function promoEventSubscribe(remainingData: object) {
  gtmEvent('PromoEventSubscribe', remainingData);
}

export function promoEventViewContent(remainingData: object) {
  gtmEvent('PromoEventViewContent', remainingData);
}
