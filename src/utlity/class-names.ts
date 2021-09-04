interface ClassName {
    [key: string]: boolean | ClassName;
}
type ClassNamesTypes = string | number | ClassName | ClassNamesTypes[];

export function classNames(...args: ClassNamesTypes[]): string {
    const classes: string[] = [];

    for (const arg of args) {
        if (arg) {
            if (typeof arg === "string") {
                classes.push(arg);
            } else if (typeof arg === "number") {
                classes.push(arg.toString());
            } else if (Array.isArray(arg)) {
                if (arg.length > 0) {
                    const inner = classNames(...arg);

                    if (inner) {
                        classes.push(inner);
                    }
                }
            } else if (typeof arg === "object") {
                for (const key of Object.keys(arg)) {
                    // if value is truthy, add it to the classes
                    if (arg[key as keyof typeof arg]) {
                        classes.push(key);
                    }
                }
            }
        }
    }

    return classes.join(" ");
}
