import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <div className="pt-10">
          <TodoTab />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

const TodoTab = () => {
  return (
    <Tabs.Root className="" defaultValue={TAB_LIST[0]}>
      <Tabs.List className="flex items-center gap-2 self-stretch text-gray-700">
        {TAB_LIST.map((tab, index) => {
          return (
            <Tabs.Trigger
              key={index}
              className="flex items-center justify-center gap-2 rounded-full px-6 py-3 data-[state=inactive]:border data-[state=inactive]:border-gray-200 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              value={tab}
            >
              <label className="text-center text-sm font-bold">{tab}</label>
            </Tabs.Trigger>
          )
        })}
      </Tabs.List>
      {TAB_LIST.map((tab, index) => (
        <Tabs.Content className="pt-10" key={index} value={tab}>
          <TodoList filter={tab === 'All' ? '' : tab.toLowerCase()} />
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}

const TAB_LIST = ['All', 'Pending', 'Completed']

export default Index
