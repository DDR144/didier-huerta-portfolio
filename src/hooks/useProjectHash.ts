"use client"

import { useCallback, useSyncExternalStore } from "react"
import { getProjectBySlug, getProjectSlugs } from "@/data/projects"
import type { Project } from "@/data/projects"

const listeners = new Set<() => void>()

function notify() {
  for (const listener of listeners) listener()
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  window.addEventListener("hashchange", notify)
  window.addEventListener("popstate", notify)

  return () => {
    listeners.delete(listener)
    if (listeners.size === 0) {
      window.removeEventListener("hashchange", notify)
      window.removeEventListener("popstate", notify)
    }
  }
}

const getSnapshot = () => window.location.hash.slice(1)
const getServerSnapshot = () => ""

export function useProjectHash() {
  const slug = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const project: Project | null =
    slug && getProjectSlugs().includes(slug) ? getProjectBySlug(slug) ?? null : null

  const openModal = useCallback((nextSlug: string) => {
    if (!getProjectBySlug(nextSlug)) return
    if (window.location.hash.slice(1) === nextSlug) return
    window.location.hash = nextSlug
  }, [])

  const closeModal = useCallback(() => {
    if (!window.location.hash) return
    window.history.replaceState(null, "", window.location.pathname + window.location.search)
    notify()
  }, [])

  return { project, openModal, closeModal }
}
