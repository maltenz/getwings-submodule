import {
  SET_DATA_CURRENT_THEME_MEDITATIONS,
  SET_DATA_CURRENT_THEME,
  SET_DATA_THEMES,
  SET_DATA_ALL_WINGS,
  SET_DATA_CURRENT_WING,
  SET_DATA_CATEGORIES,
  SET_DATA_CURRENT_CATEGORIES,
} from './types'

const setDataCurrentThemeMeditations = payload => ({
  type: SET_DATA_CURRENT_THEME_MEDITATIONS,
  payload,
})

const setDataCurrentTheme = payload => ({
  type: SET_DATA_CURRENT_THEME,
  payload,
})

const setDataThemes = payload => ({
  type: SET_DATA_THEMES,
  payload,
})

const setDataAllWings = payload => ({
  type: SET_DATA_ALL_WINGS,
  payload,
})

const setDataCurrentWing = payload => ({
  type: SET_DATA_CURRENT_WING,
  payload,
})

const setDataCategories = payload => ({
  type: SET_DATA_CATEGORIES,
  payload,
})

const setDataCurrentCategory = payload => ({
  type: SET_DATA_CURRENT_CATEGORIES,
  payload,
})

export {
  setDataCurrentThemeMeditations,
  setDataCurrentTheme,
  setDataThemes,
  setDataAllWings,
  setDataCurrentWing,
  setDataCategories,
  setDataCurrentCategory,
}
