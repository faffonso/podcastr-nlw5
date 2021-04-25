webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/*! exports provided: PlayerContext, PlayerContextProvider, usePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerContext", function() { return PlayerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerContextProvider", function() { return PlayerContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePlayer", function() { return usePlayer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\USP\\Rocketseat\\NLW#5 - React\\podcastr\\src\\contexts\\PlayerContext.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
var PlayerContextProvider = function PlayerContextProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      episodeList = _useState[0],
      setEpisodeList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentEpisodeIndex = _useState2[0],
      setCurrentEpisodeIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isPlaying = _useState3[0],
      setIsPlaying = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLooping = _useState4[0],
      setIsLooping = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isShuffling = _useState5[0],
      setIsShuffling = _useState5[1];

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function playList(list, index) {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function toggleLoop() {
    setIsLooping(!isLooping);
  }

  function toggleShuffle() {
    setIsShuffling(!isShuffling);
  }

  function setPlayingState(state) {
    setIsPlaying(state);
  }

  var hasPrevious = currentEpisodeIndex > 0;
  var hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length;

  function playNext() {
    if (isShuffling) {
      var nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);
      setCurrentEpisodeIndex(nextRandomEpisodeIndex);
    } else if (hasNext) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
  }

  function playPrevious() {
    if (hasPrevious) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    }
  }

  function clearPlayerState() {
    setEpisodeList([]);
    setCurrentEpisodeIndex(0);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PlayerContext.Provider, {
    value: {
      episodeList: episodeList,
      currentEpisodeIndex: currentEpisodeIndex,
      play: play,
      isPlaying: isPlaying,
      isLooping: isLooping,
      isShuffling: isShuffling,
      playList: playList,
      togglePlay: togglePlay,
      toggleLoop: toggleLoop,
      toggleShuffle: toggleShuffle,
      setPlayingState: setPlayingState,
      playNext: playNext,
      playPrevious: playPrevious,
      clearPlayerState: clearPlayerState,
      hasNext: hasNext,
      hasPrevious: hasPrevious
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, _this);
};

_s(PlayerContextProvider, "YSXWY8OfLfVxd5To+FHcHi+GAY0=");

_c = PlayerContextProvider;
var usePlayer = function usePlayer() {
  _s2();

  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(PlayerContext);
};

_s2(usePlayer, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var _c;

$RefreshReg$(_c, "PlayerContextProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4Il0sIm5hbWVzIjpbIlBsYXllckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUGxheWVyQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImVwaXNvZGVMaXN0Iiwic2V0RXBpc29kZUxpc3QiLCJjdXJyZW50RXBpc29kZUluZGV4Iiwic2V0Q3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsImlzTG9vcGluZyIsInNldElzTG9vcGluZyIsImlzU2h1ZmZsaW5nIiwic2V0SXNTaHVmZmxpbmciLCJwbGF5IiwiZXBpc29kZSIsInBsYXlMaXN0IiwibGlzdCIsImluZGV4IiwidG9nZ2xlUGxheSIsInRvZ2dsZUxvb3AiLCJ0b2dnbGVTaHVmZmxlIiwic2V0UGxheWluZ1N0YXRlIiwic3RhdGUiLCJoYXNQcmV2aW91cyIsImhhc05leHQiLCJsZW5ndGgiLCJwbGF5TmV4dCIsIm5leHRSYW5kb21FcGlzb2RlSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwbGF5UHJldmlvdXMiLCJjbGVhclBsYXllclN0YXRlIiwidXNlUGxheWVyIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNkJPLElBQU1BLGFBQWEsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUFuQztBQU1BLElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsT0FBNEM7QUFBQTs7QUFBQSxNQUExQ0MsUUFBMEMsUUFBMUNBLFFBQTBDOztBQUFBLGtCQUN6Q0Msc0RBQVEsQ0FBQyxFQUFELENBRGlDO0FBQUEsTUFDeEVDLFdBRHdFO0FBQUEsTUFDM0RDLGNBRDJEOztBQUFBLG1CQUV6QkYsc0RBQVEsQ0FBQyxDQUFELENBRmlCO0FBQUEsTUFFeEVHLG1CQUZ3RTtBQUFBLE1BRW5EQyxzQkFG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QU1ELHFCOztLQUFBQSxxQjtBQXNGTixJQUFNaUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUM3QixTQUFPQyx3REFBVSxDQUFDcEMsYUFBRCxDQUFqQjtBQUNELENBRk07O0lBQU1tQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFiMWU0Zjg2YTQ1Y2ViYTJlOTE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG50eXBlIEVwaXNvZGUgPSB7XG4gIHRpdGxlOiBzdHJpbmcsXG4gIG1lbWJlcnM6IHN0cmluZyxcbiAgdGh1bWJuYWlsOiBzdHJpbmcsXG4gIGR1cmF0aW9uOiBudW1iZXIsXG4gIHVybDogc3RyaW5nO1xufVxuXG50eXBlIFBsYXllckNvbnRleHREYXRhID0ge1xuICBlcGlzb2RlTGlzdDogQXJyYXk8RXBpc29kZT5cbiAgY3VycmVudEVwaXNvZGVJbmRleDogbnVtYmVyXG4gIGlzUGxheWluZzogYm9vbGVhblxuICBpc0xvb3Bpbmc6IGJvb2xlYW5cbiAgaXNTaHVmZmxpbmdcbiAgcGxheTogKGVwaXNvZGU6IEVwaXNvZGUpID0+IHZvaWRcbiAgc2V0UGxheWluZ1N0YXRlOiAoc3RhdGU6IGJvb2xlYW4pID0+IHZvaWRcbiAgcGxheUxpc3Q6IChsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpID0+IHZvaWRcbiAgdG9nZ2xlUGxheTogKCkgPT4gdm9pZFxuICB0b2dnbGVMb29wOiAoKSA9PiB2b2lkXG4gIHRvZ2dsZVNodWZmbGU6ICgpID0+IHZvaWRcbiAgcGxheU5leHQ6ICgpID0+IHZvaWRcbiAgcGxheVByZXZpb3VzOiAoKSA9PiB2b2lkXG4gIGNsZWFyUGxheWVyU3RhdGU6ICgpID0+IHZvaWRcbiAgaGFzTmV4dDogYm9vbGVhblxuICBoYXNQcmV2aW91czogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgUGxheWVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgUGxheWVyQ29udGV4dERhdGEpXG5cbnR5cGUgUGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcbn1cblxuZXhwb3J0IGNvbnN0IFBsYXllckNvbnRleHRQcm92aWRlciA9ICh7Y2hpbGRyZW59OiBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcykgPT4ge1xuICBjb25zdCBbZXBpc29kZUxpc3QsIHNldEVwaXNvZGVMaXN0XSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbY3VycmVudEVwaXNvZGVJbmRleCwgc2V0Q3VycmVudEVwaXNvZGVJbmRleF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpc0xvb3BpbmcsIHNldElzTG9vcGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2lzU2h1ZmZsaW5nLCBzZXRJc1NodWZmbGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBmdW5jdGlvbiBwbGF5KGVwaXNvZGU6IEVwaXNvZGUpIHtcbiAgICBzZXRFcGlzb2RlTGlzdChbZXBpc29kZV0pO1xuICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoMCk7XG4gICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheUxpc3QobGlzdDogRXBpc29kZVtdLCBpbmRleDogbnVtYmVyKSB7XG4gICAgc2V0RXBpc29kZUxpc3QobGlzdClcbiAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGluZGV4KVxuICAgIHNldElzUGxheWluZyh0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlUGxheSgpIHtcbiAgICBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVMb29wKCkge1xuICAgIHNldElzTG9vcGluZyghaXNMb29waW5nKVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlU2h1ZmZsZSgpIHtcbiAgICBzZXRJc1NodWZmbGluZyghaXNTaHVmZmxpbmcpXG4gIH1cblxuICBmdW5jdGlvbiBzZXRQbGF5aW5nU3RhdGUoc3RhdGU6IGJvb2xlYW4pIHtcbiAgICBzZXRJc1BsYXlpbmcoc3RhdGUpXG4gIH1cblxuICBjb25zdCBoYXNQcmV2aW91cyA9IGN1cnJlbnRFcGlzb2RlSW5kZXggPiAwXG4gIGNvbnN0IGhhc05leHQgPSBpc1NodWZmbGluZyB8fChjdXJyZW50RXBpc29kZUluZGV4ICsgMSkgPCBlcGlzb2RlTGlzdC5sZW5ndGhcblxuXG4gIGZ1bmN0aW9uIHBsYXlOZXh0ICgpIHtcbiAgICBpZiAoaXNTaHVmZmxpbmcpe1xuICAgICAgY29uc3QgbmV4dFJhbmRvbUVwaXNvZGVJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVwaXNvZGVMaXN0Lmxlbmd0aClcblxuICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChuZXh0UmFuZG9tRXBpc29kZUluZGV4KVxuICAgIH0gZWxzZSBpZiAoaGFzTmV4dCkge1xuICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4ICsgMSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5UHJldmlvdXMoKSB7XG4gICAgaWYgKGhhc1ByZXZpb3VzKSB7XG4gICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXggLSAxKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyUGxheWVyU3RhdGUoKSB7XG4gICAgc2V0RXBpc29kZUxpc3QgKFtdKVxuICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoMClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBsYXllckNvbnRleHQuUHJvdmlkZXIgXG4gICAgICB2YWx1ZT17eyBcbiAgICAgICAgZXBpc29kZUxpc3QsXG4gICAgICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsXG4gICAgICAgIHBsYXksXG4gICAgICAgIGlzUGxheWluZyxcbiAgICAgICAgaXNMb29waW5nLFxuICAgICAgICBpc1NodWZmbGluZyxcbiAgICAgICAgcGxheUxpc3QsXG4gICAgICAgIHRvZ2dsZVBsYXksXG4gICAgICAgIHRvZ2dsZUxvb3AsXG4gICAgICAgIHRvZ2dsZVNodWZmbGUsXG4gICAgICAgIHNldFBsYXlpbmdTdGF0ZSxcbiAgICAgICAgcGxheU5leHQsXG4gICAgICAgIHBsYXlQcmV2aW91cyxcbiAgICAgICAgY2xlYXJQbGF5ZXJTdGF0ZSxcbiAgICAgICAgaGFzTmV4dCxcbiAgICAgICAgaGFzUHJldmlvdXNcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUGxheWVyQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlUGxheWVyID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KVxufSJdLCJzb3VyY2VSb290IjoiIn0=