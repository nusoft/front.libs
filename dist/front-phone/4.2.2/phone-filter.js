/*! front-phone - v4.2.2 - https://vtex.github.io/front.phone/ */
!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/@vtex/phone/script/",t(0)}([function(e,t,n){window.angular.module("vtex.phoneFilter",[]).filter("phone",function(){return function(e,t,n){var o;return e?(n&&(o=vtex.phone.getPhoneNational(e,n)),o&&n||(o=vtex.phone.getPhoneInternational(e)),t=t?vtex.phone[t.toUpperCase()]:vtex.phone.INTERNATIONAL,vtex.phone.format(o,t)):"N/A"}})}]);