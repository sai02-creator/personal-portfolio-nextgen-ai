import {
  AsteriskIcon,
  BookIcon,
  CaseIcon,
  CogIcon,
  CommentIcon,
  ComposeIcon,
  DocumentIcon,
  DocumentsIcon,
  InlineIcon,
  ProjectsIcon,
  RocketIcon,
  StarIcon,
  TagIcon,
  UserIcon,
} from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Portfolio Content")
    .items([
      // Profile (Singleton)
      S.listItem()
        .title("Profile")
        .icon(UserIcon)
        .child(
          S.document().schemaType("profile").documentId("singleton-profile"),
        ),

      S.divider(),

    ])
