import { Badge } from "@/components/ui/badge";

const highlightVariables = (text: string, variables: string[]) => {
  if (!variables.length) return [text];
  const regex = new RegExp(`(${variables.map((v) => v.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")).join("|")})`, "g");
  return text.split(regex).filter(Boolean);
};

export function EmailPreview({
  subject,
  body,
  variables = [],
}: {
  subject: string;
  body: string;
  variables?: string[];
}) {
  const subjectParts = highlightVariables(subject, variables);
  const bodyParts = highlightVariables(body, variables);

  return (
    <div className="rounded-xl border bg-slate-50 p-4 text-sm text-slate-700">
      <p className="text-xs uppercase text-slate-400">Email preview</p>
      <div className="mt-2">
        <p className="font-semibold text-slate-900">Subject:</p>
        <p>
          {subjectParts.map((part, index) =>
            variables.includes(part) ? (
              <Badge key={`${part}-${index}`} className="mx-1">
                {part}
              </Badge>
            ) : (
              <span key={`${part}-${index}`}>{part}</span>
            )
          )}
        </p>
      </div>
      <div className="mt-4">
        <p className="font-semibold text-slate-900">Body:</p>
        <p className="whitespace-pre-line">
          {bodyParts.map((part, index) =>
            variables.includes(part) ? (
              <Badge key={`${part}-${index}`} className="mx-1">
                {part}
              </Badge>
            ) : (
              <span key={`${part}-${index}`}>{part}</span>
            )
          )}
        </p>
      </div>
    </div>
  );
}
