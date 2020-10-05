import {step} from './typedef'
import {callStack} from './caller'
import {createNode} from './createNode'
import {Subscription, Unit} from './index.h'
import {createSubscription} from './subscription'
import {addToRegion} from './region'
import {throwError} from './throw'
import {isFunction} from './is'
import {forkPage} from './kernel'
import {getGraph} from './getter'

export const watchUnit = (
  unit: Unit,
  handler: (payload: any) => any,
): Subscription => {
  if (!isFunction(handler)) throwError('.watch argument should be a function')
  if (forkPage) {
    const forkedNode = forkPage.nodeMap[getGraph(unit).id]
    if (forkedNode) unit = forkedNode
  }
  return createSubscription(
    addToRegion(
      createNode({
        scope: {fn: handler},
        node: [step.run({fn: callStack})],
        parent: unit,
        meta: {op: 'watch'},
        family: {
          owners: unit,
        },
      }),
    ),
  )
}
