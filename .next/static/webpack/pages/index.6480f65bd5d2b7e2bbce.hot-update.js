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
      var _nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);

      setCurrentEpisodeIndex(_nextRandomEpisodeIndex);
    } else if (hasNext) {
      setCurrentEpisodeIndex(nextRandomEpisodeIndex);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4Il0sIm5hbWVzIjpbIlBsYXllckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUGxheWVyQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImVwaXNvZGVMaXN0Iiwic2V0RXBpc29kZUxpc3QiLCJjdXJyZW50RXBpc29kZUluZGV4Iiwic2V0Q3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsImlzTG9vcGluZyIsInNldElzTG9vcGluZyIsImlzU2h1ZmZsaW5nIiwic2V0SXNTaHVmZmxpbmciLCJwbGF5IiwiZXBpc29kZSIsInBsYXlMaXN0IiwibGlzdCIsImluZGV4IiwidG9nZ2xlUGxheSIsInRvZ2dsZUxvb3AiLCJ0b2dnbGVTaHVmZmxlIiwic2V0UGxheWluZ1N0YXRlIiwic3RhdGUiLCJoYXNQcmV2aW91cyIsImhhc05leHQiLCJsZW5ndGgiLCJwbGF5TmV4dCIsIm5leHRSYW5kb21FcGlzb2RlSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwbGF5UHJldmlvdXMiLCJjbGVhclBsYXllclN0YXRlIiwidXNlUGxheWVyIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNkJPLElBQU1BLGFBQWEsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUFuQztBQU1BLElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsT0FBNEM7QUFBQTs7QUFBQSxNQUExQ0MsUUFBMEMsUUFBMUNBLFFBQTBDOztBQUFBLGtCQUN6Q0Msc0RBQVEsQ0FBQyxFQUFELENBRGlDO0FBQUEsTUFDeEVDLFdBRHdFO0FBQUEsTUFDM0RDLGNBRDJEOztBQUFBLG1CQUV6QkYsc0RBQVEsQ0FBQyxDQUFELENBRmlCO0FBQUEsTUFFeEVHLG1CQUZ3RTtBQUFBLE1BRW5EQyxzQkFGbUQ7O0FBQUEsbUJBRzdDSixzREFBUSxDQUFDLEtBQUQsQ0FIcUM7QUFBQSxNQUd4RUssU0FId0U7QUFBQSxNQUc3REMsWUFINkQ7O0FBQUEsbUJBSTdDTixzREFBUSxDQUFDLEtBQUQsQ0FKcUM7QUFBQSxNQUl4RU8sU0FKd0U7QUFBQSxNQUk3REMsWUFKNkQ7O0FBQUEsbUJBS3pDUixzREFBUSxDQUFDLEtBQUQsQ0FMaUM7QUFBQSxNQUt4RVMsV0FMd0U7QUFBQSxNQUszREMsY0FMMkQ7O0FBTy9FLFdBQVNDLElBQVQsQ0FBY0MsT0FBZCxFQUFnQztBQUM5QlYsa0JBQWMsQ0FBQyxDQUFDVSxPQUFELENBQUQsQ0FBZDtBQUNBUiwwQkFBc0IsQ0FBQyxDQUFELENBQXRCO0FBQ0FFLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Q7O0FBRUQsV0FBU08sUUFBVCxDQUFrQkMsSUFBbEIsRUFBbUNDLEtBQW5DLEVBQWtEO0FBQ2hEYixrQkFBYyxDQUFDWSxJQUFELENBQWQ7QUFDQVYsMEJBQXNCLENBQUNXLEtBQUQsQ0FBdEI7QUFDQVQsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRDs7QUFFRCxXQUFTVSxVQUFULEdBQXNCO0FBQ3BCVixnQkFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNEOztBQUVELFdBQVNZLFVBQVQsR0FBc0I7QUFDcEJULGdCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0Q7O0FBRUQsV0FBU1csYUFBVCxHQUF5QjtBQUN2QlIsa0JBQWMsQ0FBQyxDQUFDRCxXQUFGLENBQWQ7QUFDRDs7QUFFRCxXQUFTVSxlQUFULENBQXlCQyxLQUF6QixFQUF5QztBQUN2Q2QsZ0JBQVksQ0FBQ2MsS0FBRCxDQUFaO0FBQ0Q7O0FBRUQsTUFBTUMsV0FBVyxHQUFHbEIsbUJBQW1CLEdBQUcsQ0FBMUM7QUFDQSxNQUFNbUIsT0FBTyxHQUFHYixXQUFXLElBQUlOLG1CQUFtQixHQUFHLENBQXZCLEdBQTRCRixXQUFXLENBQUNzQixNQUF0RTs7QUFHQSxXQUFTQyxRQUFULEdBQXFCO0FBQ25CLFFBQUlmLFdBQUosRUFBZ0I7QUFDZCxVQUFNZ0IsdUJBQXNCLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IzQixXQUFXLENBQUNzQixNQUF2QyxDQUEvQjs7QUFFQW5CLDRCQUFzQixDQUFDcUIsdUJBQUQsQ0FBdEI7QUFDRCxLQUpELE1BSU8sSUFBSUgsT0FBSixFQUFhO0FBQ2xCbEIsNEJBQXNCLENBQUNxQixzQkFBRCxDQUF0QjtBQUNEO0FBQ0Y7O0FBRUQsV0FBU0ksWUFBVCxHQUF3QjtBQUN0QixRQUFJUixXQUFKLEVBQWlCO0FBQ2ZqQiw0QkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUcsQ0FBdkIsQ0FBdEI7QUFDRDtBQUNGOztBQUVELFdBQVMyQixnQkFBVCxHQUE0QjtBQUMxQjVCLGtCQUFjLENBQUUsRUFBRixDQUFkO0FBQ0FFLDBCQUFzQixDQUFDLENBQUQsQ0FBdEI7QUFDRDs7QUFFRCxzQkFDRSxxRUFBQyxhQUFELENBQWUsUUFBZjtBQUNFLFNBQUssRUFBRTtBQUNMSCxpQkFBVyxFQUFYQSxXQURLO0FBRUxFLHlCQUFtQixFQUFuQkEsbUJBRks7QUFHTFEsVUFBSSxFQUFKQSxJQUhLO0FBSUxOLGVBQVMsRUFBVEEsU0FKSztBQUtMRSxlQUFTLEVBQVRBLFNBTEs7QUFNTEUsaUJBQVcsRUFBWEEsV0FOSztBQU9MSSxjQUFRLEVBQVJBLFFBUEs7QUFRTEcsZ0JBQVUsRUFBVkEsVUFSSztBQVNMQyxnQkFBVSxFQUFWQSxVQVRLO0FBVUxDLG1CQUFhLEVBQWJBLGFBVks7QUFXTEMscUJBQWUsRUFBZkEsZUFYSztBQVlMSyxjQUFRLEVBQVJBLFFBWks7QUFhTEssa0JBQVksRUFBWkEsWUFiSztBQWNMQyxzQkFBZ0IsRUFBaEJBLGdCQWRLO0FBZUxSLGFBQU8sRUFBUEEsT0FmSztBQWdCTEQsaUJBQVcsRUFBWEE7QUFoQkssS0FEVDtBQUFBLGNBb0JHdEI7QUFwQkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0JELENBcEZNOztHQUFNRCxxQjs7S0FBQUEscUI7QUFzRk4sSUFBTWlDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDN0IsU0FBT0Msd0RBQVUsQ0FBQ3BDLGFBQUQsQ0FBakI7QUFDRCxDQUZNOztJQUFNbUMsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NDgwZjY1YmQ1ZDJiN2UyYmJjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBFcGlzb2RlID0ge1xuICB0aXRsZTogc3RyaW5nLFxuICBtZW1iZXJzOiBzdHJpbmcsXG4gIHRodW1ibmFpbDogc3RyaW5nLFxuICBkdXJhdGlvbjogbnVtYmVyLFxuICB1cmw6IHN0cmluZztcbn1cblxudHlwZSBQbGF5ZXJDb250ZXh0RGF0YSA9IHtcbiAgZXBpc29kZUxpc3Q6IEFycmF5PEVwaXNvZGU+XG4gIGN1cnJlbnRFcGlzb2RlSW5kZXg6IG51bWJlclxuICBpc1BsYXlpbmc6IGJvb2xlYW5cbiAgaXNMb29waW5nOiBib29sZWFuXG4gIGlzU2h1ZmZsaW5nXG4gIHBsYXk6IChlcGlzb2RlOiBFcGlzb2RlKSA9PiB2b2lkXG4gIHNldFBsYXlpbmdTdGF0ZTogKHN0YXRlOiBib29sZWFuKSA9PiB2b2lkXG4gIHBsYXlMaXN0OiAobGlzdDogRXBpc29kZVtdLCBpbmRleDogbnVtYmVyKSA9PiB2b2lkXG4gIHRvZ2dsZVBsYXk6ICgpID0+IHZvaWRcbiAgdG9nZ2xlTG9vcDogKCkgPT4gdm9pZFxuICB0b2dnbGVTaHVmZmxlOiAoKSA9PiB2b2lkXG4gIHBsYXlOZXh0OiAoKSA9PiB2b2lkXG4gIHBsYXlQcmV2aW91czogKCkgPT4gdm9pZFxuICBjbGVhclBsYXllclN0YXRlOiAoKSA9PiB2b2lkXG4gIGhhc05leHQ6IGJvb2xlYW5cbiAgaGFzUHJldmlvdXM6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IFBsYXllckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIFBsYXllckNvbnRleHREYXRhKVxuXG50eXBlIFBsYXllckNvbnRleHRQcm92aWRlclByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlXG59XG5cbmV4cG9ydCBjb25zdCBQbGF5ZXJDb250ZXh0UHJvdmlkZXIgPSAoe2NoaWxkcmVufTogUGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMpID0+IHtcbiAgY29uc3QgW2VwaXNvZGVMaXN0LCBzZXRFcGlzb2RlTGlzdF0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2N1cnJlbnRFcGlzb2RlSW5kZXgsIHNldEN1cnJlbnRFcGlzb2RlSW5kZXhdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaXNMb29waW5nLCBzZXRJc0xvb3BpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpc1NodWZmbGluZywgc2V0SXNTaHVmZmxpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgZnVuY3Rpb24gcGxheShlcGlzb2RlOiBFcGlzb2RlKSB7XG4gICAgc2V0RXBpc29kZUxpc3QoW2VwaXNvZGVdKTtcbiAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KDApO1xuICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlMaXN0KGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6IG51bWJlcikge1xuICAgIHNldEVwaXNvZGVMaXN0KGxpc3QpXG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChpbmRleClcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVBsYXkoKSB7XG4gICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlTG9vcCgpIHtcbiAgICBzZXRJc0xvb3BpbmcoIWlzTG9vcGluZylcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVNodWZmbGUoKSB7XG4gICAgc2V0SXNTaHVmZmxpbmcoIWlzU2h1ZmZsaW5nKVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0UGxheWluZ1N0YXRlKHN0YXRlOiBib29sZWFuKSB7XG4gICAgc2V0SXNQbGF5aW5nKHN0YXRlKVxuICB9XG5cbiAgY29uc3QgaGFzUHJldmlvdXMgPSBjdXJyZW50RXBpc29kZUluZGV4ID4gMFxuICBjb25zdCBoYXNOZXh0ID0gaXNTaHVmZmxpbmcgfHwoY3VycmVudEVwaXNvZGVJbmRleCArIDEpIDwgZXBpc29kZUxpc3QubGVuZ3RoXG5cblxuICBmdW5jdGlvbiBwbGF5TmV4dCAoKSB7XG4gICAgaWYgKGlzU2h1ZmZsaW5nKXtcbiAgICAgIGNvbnN0IG5leHRSYW5kb21FcGlzb2RlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlcGlzb2RlTGlzdC5sZW5ndGgpXG5cbiAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgobmV4dFJhbmRvbUVwaXNvZGVJbmRleClcbiAgICB9IGVsc2UgaWYgKGhhc05leHQpIHtcbiAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgobmV4dFJhbmRvbUVwaXNvZGVJbmRleClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5UHJldmlvdXMoKSB7XG4gICAgaWYgKGhhc1ByZXZpb3VzKSB7XG4gICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXggLSAxKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyUGxheWVyU3RhdGUoKSB7XG4gICAgc2V0RXBpc29kZUxpc3QgKFtdKVxuICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoMClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBsYXllckNvbnRleHQuUHJvdmlkZXIgXG4gICAgICB2YWx1ZT17eyBcbiAgICAgICAgZXBpc29kZUxpc3QsXG4gICAgICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsXG4gICAgICAgIHBsYXksXG4gICAgICAgIGlzUGxheWluZyxcbiAgICAgICAgaXNMb29waW5nLFxuICAgICAgICBpc1NodWZmbGluZyxcbiAgICAgICAgcGxheUxpc3QsXG4gICAgICAgIHRvZ2dsZVBsYXksXG4gICAgICAgIHRvZ2dsZUxvb3AsXG4gICAgICAgIHRvZ2dsZVNodWZmbGUsXG4gICAgICAgIHNldFBsYXlpbmdTdGF0ZSxcbiAgICAgICAgcGxheU5leHQsXG4gICAgICAgIHBsYXlQcmV2aW91cyxcbiAgICAgICAgY2xlYXJQbGF5ZXJTdGF0ZSxcbiAgICAgICAgaGFzTmV4dCxcbiAgICAgICAgaGFzUHJldmlvdXNcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUGxheWVyQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlUGxheWVyID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KVxufSJdLCJzb3VyY2VSb290IjoiIn0=