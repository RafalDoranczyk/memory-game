export const mixins = {
    absolutePosition: (top, left) => (
        {
            position: 'absolute',
            top: `${top}% `,
            left: `${left}% `,
        }
    ),
    relativePosition: (top, left) => (
        {
            position: 'relative',
            top: `${top}% `,
            left: `${left}% `,
        }
    )

}
