/// <reference path="./matchers/beWithin.ts"/>

import { createFixtureLoader } from './shared/provider'
import { AriswapFixtureType } from './shared/fixtures'

export type LoadFixtureFunction = ReturnType<typeof createFixtureLoader>

export type TestContext = AriswapFixtureType & {
  subject?: Function
}
