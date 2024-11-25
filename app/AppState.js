import { Category } from './models/Category.js';
import { Question } from './models/Question.js';
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  examples = []
  categories = []
  activeCategory = null
}

export const AppState = createObservableProxy(new ObservableAppState())