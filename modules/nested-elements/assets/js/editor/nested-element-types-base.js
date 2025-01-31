import View from './views/view';
import EmptyView from './views/empty';

export class NestedElementTypesBase extends elementor.modules.elements.types.Base {
	getType() {
		elementorModules.ForceMethodImplementation();
	}

	getView() {
		return View;
	}

	getEmptyView() {
		return EmptyView;
	}

	getModel() {
		return $e.components.get( 'nested-elements/nested-repeater' ).exports.NestedModelBase;
	}
}

export default NestedElementTypesBase;
