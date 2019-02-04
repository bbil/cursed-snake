const styles = {
    border: { type: 'line' },
    borderColor(color: string) {
        return {
            border: {fg: color},
            label: {fg: color},
        }
    },
}

export default styles
